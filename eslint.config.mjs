import jsLint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import tsLint from "typescript-eslint";

export default tsLint.config(
	jsLint.configs.recommended,
	...tsLint.configs.strict,
	...tsLint.configs.stylistic,
	// config parsers
	{
		files: ["*.ts"],
		languageOptions: {
			parserOptions: {
				parser: "@typescript-eslint/parser",
				sourceType: "module",
				project: "./tsconfig.json",
			},
		},
	},
	// config envs
	{
		languageOptions: {
			globals: {
				...globals.jest,
				...globals.node,
			},
		},
		rules: {},
	},
	{
		ignores: ["coverage/", "example/", "build/"],
	},
	eslintConfigPrettier,
);
