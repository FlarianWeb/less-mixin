import { all } from '@flarian/frontend-preset/stylelint';

export default {
	extends: [all.less],

	rules: {
		'at-rule-no-unknown': [true, { ignoreAtRules: ['theme'] }],
		'order/order': null, // Отключаем для LESS - рекурсия требует определенного порядка
	},
};
