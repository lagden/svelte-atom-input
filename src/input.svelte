<svelte:options accessors />

<script>
	// Props
	export let value = ''

	// Bind HTML Element
	export let node = undefined

	// Class - CSS
	const restPropsClass = String($$restProps?.class ?? '').split(' ')
	$$restProps.class = [
		...new Set(['_atom_frm__base', ...restPropsClass])
	].join(' ')

	// Mapa dos tipos permitidos
	const types = new Set(['text', 'password', 'tel', 'email', 'date', 'number', 'search', 'url'])
	$$restProps.type = $$restProps?.type ?? 'text'
	$$restProps.type = types.has($$restProps.type) ? $$restProps.type : 'text'
</script>

<input
	bind:this={node}
	bind:value
	on:input
	on:blur
	on:focus
	on:click
	on:change
	{...$$restProps}
>
