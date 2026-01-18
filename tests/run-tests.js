import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import less from 'less';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testsDir = __dirname;
const categories = ['layout'];

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

// Проверяем флаги
const args = process.argv.slice(2);
const isSnapshot = args.includes('-g') || args.includes('--generate');
const filterPattern = args.find((arg) => !arg.startsWith('-'));

async function runTest(category, testFile) {
	const testPath = path.join(testsDir, category, testFile);
	const expectedPath = testPath.replace('.spec.less', '.snapshot.css');

	// Фильтруем по паттерну если указан
	if (filterPattern && !testFile.includes(filterPattern)) {
		return;
	}

	totalTests++;

	try {
		const lessContent = fs.readFileSync(testPath, 'utf8');
		const projectRoot = path.join(testsDir, '..');
		const result = await less.render(lessContent, {
			filename: testPath,
			paths: [projectRoot], // Добавляем корневую директорию проекта для поиска файлов
			rewriteUrls: 'local',
			rootpath: '../',
		});

		// Форматируем вывод - добавляем пустые строки между правилами для читаемости
		const formatCss = (css) => {
			return (
				css
					.trim()
					.replace(/  /g, '\t') // Заменяем 2 пробела на табы
					.replace(/}\n\./g, '}\n\n.') // Добавляем пустую строку между классами
					.replace(/}\n\@/g, '}\n\n@') // Добавляем пустую строку перед @-правилами
					.replace(/}\n\/\*/g, '}\n\n/*') // Добавляем пустую строку перед комментариями
					.replace(/\@[^{]+\{[^}]*}\n\./g, (match) => match.replace(/}\n\./, '}\n\n.')) + // После @-правил
				'\n'
			); // Новая строка в конце файла
		};

		const actual = formatCss(result.css);

		// Режим генерации snapshot'ов
		if (isSnapshot) {
			fs.writeFileSync(expectedPath, actual, 'utf8');
			console.log(`📸 Generated snapshot: ${category}/${testFile}`);
			passedTests++;
			return;
		}

		// Режим проверки тестов
		if (!fs.existsSync(expectedPath)) {
			console.log(`⚠️  No expected file for ${category}/${testFile}`);
			console.log('   Run with -g flag to generate it');
			failedTests++;
			return;
		}

		// Нормализуем вывод - убираем различия в пустых строках
		// const normalize = (css) => css.trim().replace(/\n\n/g, '\n');
		const normalize = (css) => css;
		const actualNormalized = normalize(actual);
		const expected = normalize(fs.readFileSync(expectedPath, 'utf8'));

		if (actualNormalized === expected) {
			console.log(`✅ ${category}/${testFile}`);
			passedTests++;
		} else {
			console.log(`❌ ${category}/${testFile}`);
			console.log('Expected:');
			console.log(expected);
			console.log('\nActual:');
			console.log(actualNormalized);
			failedTests++;
		}
	} catch (error) {
		console.log(`❌ ${category}/${testFile} - Error: ${error.message}`);
		failedTests++;
	}
}

async function runAllTests() {
	if (isSnapshot) {
		console.log('📸 Generating snapshots...\n');
	} else {
		console.log('🧪 Running LESS mixins tests...\n');
	}

	for (const category of categories) {
		const categoryPath = path.join(testsDir, category);

		if (!fs.existsSync(categoryPath)) {
			continue;
		}

		const files = fs.readdirSync(categoryPath);
		const testFiles = files.filter((file) => file.endsWith('.spec.less'));

		for (const testFile of testFiles) {
			await runTest(category, testFile);
		}
	}

	console.log('\n' + '='.repeat(50));
	console.log(`Total: ${totalTests}`);
	console.log(`✅ Passed: ${passedTests}`);
	console.log(`❌ Failed: ${failedTests}`);
	console.log('='.repeat(50));

	process.exit(failedTests > 0 ? 1 : 0);
}

runAllTests();
