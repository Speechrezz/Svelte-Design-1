<script>
    import CurrentPageIndex from "../../Stores.js";

    $: index = $CurrentPageIndex;

    const look = "tab tab-lg h-16 tab-bordered";
    const lookHighighted = look + " tab-active";

</script>

<a href="./" class={index === 0 ? lookHighighted : look}>Home</a>
<a href="plugins" class={index === 1 ? lookHighighted : look}>Plugins</a>
<a href="about" class={index === 2 ? lookHighighted : look}>About</a>