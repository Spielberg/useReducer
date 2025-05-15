start: ## Execute project on local environment
	@echo "🏃 Running project..."
	@npm run dev

lint: ## Run lint
	@echo "🧹 Running lint..."
	@npx eslint .
