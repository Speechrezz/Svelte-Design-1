<script>
    import LogoButton from "./Header/LogoButton.svelte";
    import TabsMenu from "./Header/TabsMenu.svelte";
    import AccountButton from "./Header/AccountButton.svelte";
</script>

<nav class="navbar bg-neutral py-0">
	<div class="container flex mx-auto ">
		<div class="flex-1 flex justify-start">
            <LogoButton />
		</div>

		<div class="flex-1 flex justify-center tabs">
			<TabsMenu />
		</div>

		<div class="flex-1 flex justify-end">
			<AccountButton />
		</div>
	</div>
</nav>
