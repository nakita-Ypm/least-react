deps:
	rm -rf node_modules && rm -rf pnpm-lock.yaml && pnpm install
	
run:
	pnpm -F @apps/least_react run dev

build:
	pnpm -F @apps/least_react run build