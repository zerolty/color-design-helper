.PHONY: help
default: help

.PHONY: install
install:
	@npm install

.PHONY: dev
dev:
	@npm run start

.PHONY: test
test:
	@npm run test

help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t---  开发模式"
	@echo "   \033[35mmake test\033[0m\t\033[0m\t---  运行测试"
