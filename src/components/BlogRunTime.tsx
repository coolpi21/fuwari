import type { Component } from "solid-js";
import { createSignal } from "solid-js";

export const BlogRunTime: Component = () => {
	const startDate = new Date("2023-04-02");
	const currentDate = new Date();
	const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
	const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

	return (
		<span>
			Cc 已经跑了
			<span class="font-bold text-[var(--primary)]"> {diffDays}</span> 天
		</span>
	);
};
