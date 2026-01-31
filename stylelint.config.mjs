import { all } from '@flarian/frontend-preset/stylelint';

export default {
	extends: [all.less],

	rules: {
		'at-rule-no-unknown': [true, { ignoreAtRules: ['theme'] }],
		'property-no-deprecated': [
			true,
			{
				ignoreProperties: ['-webkit-box-orient'], // Required for -webkit-line-clamp
			},
		]
	},
};
