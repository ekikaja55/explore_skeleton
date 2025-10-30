<script lang="ts">
	import Card from '../lib/components/Card.svelte';
	import ToastAsync from '../lib/components/ToastAsync.svelte';

	const baseClasses = 'card p-4 text-white text-center flex justify-start items-center';
</script>

<ToastAsync/>
<div class="mb-20 space-y-4">
	<h1 class="h1">Heading 1</h1>
	<h2 class="h2">Heading 2</h2>
	<h3 class="h3">Heading 3</h3>
	<h4 class="h4">Heading 4</h4>
	<h5 class="h5">Heading 5</h5>
	<h6 class="h6">Heading 6</h6>
</div>

<pre class="mb-20 pre">The quick brown fox jumps over the lazy dog.</pre>

<div class="mb-20">Insert the <code class="code">.example</code> class here.</div>

<blockquote class="mb-20 blockquote">
	"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, aliquid. Molestias, odio
	illum voluptatibus natus dignissimos, quidem est unde aspernatur veniam pariatur fuga distinctio
	esse in quas, repellendus neque reiciendis!"
</blockquote>

<div class="mb-20">Press <kbd class="kbd">⌘</kbd> + <kbd class="kbd">C</kbd> to copy.</div>

<p class="mb-20">
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, <mark class="mark"
		>aliquid</mark
	>. Molestias, odio illum voluptatibus <mark class="mark">natus dignissimos</mark>, quidem est unde
	aspernatur veniam pariatur fuga.
</p>

<div class="mb-20 w-full">
	<del class="del"><s>Always</s> Gonna Give You Up</del>
	<ins class="ins" cite="https://youtu.be/dQw4w9WgXcQ" datetime="10-31-2022">
		Never Gonna Give You Up
	</ins>
</div>

<div class="mb-10 grid w-full grid-cols-2 gap-2 lg:grid-cols-4">
	<!-- {/* Neutral */} -->
	<div class="flex items-center justify-center preset-filled p-4">(neutral)</div>
	<!-- {/* Colors */} -->
	<div class="flex items-center justify-center preset-filled-primary-950-50 p-4">950-50</div>
	<div class="flex items-center justify-center preset-filled-primary-900-100 p-4">900-100</div>
	<div class="flex items-center justify-center preset-filled-primary-800-200 p-4">800-200</div>
	<div class="flex items-center justify-center preset-filled-primary-700-300 p-4">700-300</div>
	<div class="flex items-center justify-center preset-filled-primary-600-400 p-4">600-400</div>
	<div class="flex items-center justify-center preset-filled-primary-500 p-4">500</div>
	<div class="flex items-center justify-center preset-filled-primary-400-600 p-4">400-600</div>
	<div class="flex items-center justify-center preset-filled-primary-300-700 p-4">300-700</div>
	<div class="flex items-center justify-center preset-filled-primary-200-800 p-4">200-800</div>
	<div class="flex items-center justify-center preset-filled-primary-100-900 p-4">100-900</div>
	<div class="flex items-center justify-center preset-filled-primary-50-950 p-4">50-950</div>
</div>

<div class="mb-10 grid w-full grid-cols-2 gap-2 lg:grid-cols-4">
	<!-- {/* Neutral */} -->
	<div class="flex items-center justify-center preset-tonal p-4">(neutral)</div>
	<!-- {/* Colors */} -->
	<div class="flex items-center justify-center preset-tonal-primary p-4">primary</div>
	<div class="flex items-center justify-center preset-tonal-secondary p-4">secondary</div>
	<div class="flex items-center justify-center preset-tonal-tertiary p-4">tertiary</div>
	<div class="flex items-center justify-center preset-tonal-success p-4">success</div>
	<div class="flex items-center justify-center preset-tonal-warning p-4">warning</div>
	<div class="flex items-center justify-center preset-tonal-error p-4">error</div>
	<div class="flex items-center justify-center preset-tonal-surface p-4">surface</div>
</div>

<div class="mb-10 grid w-full grid-cols-2 gap-2 lg:grid-cols-4">
	<!-- {/* Neutral */} -->
	<div class="flex items-center justify-center preset-outlined p-4">(neutral)</div>
	<!-- {/* Colors */} -->
	<div class="flex items-center justify-center preset-outlined-primary-950-50 p-4">950-50</div>
	<div class="flex items-center justify-center preset-outlined-primary-900-100 p-4">900-100</div>
	<div class="flex items-center justify-center preset-outlined-primary-800-200 p-4">800-200</div>
	<div class="flex items-center justify-center preset-outlined-primary-700-300 p-4">700-300</div>
	<div class="flex items-center justify-center preset-outlined-primary-600-400 p-4">600-400</div>
	<div class="flex items-center justify-center preset-outlined-primary-500 p-4">500</div>
	<div class="flex items-center justify-center preset-outlined-primary-400-600 p-4">400-600</div>
	<div class="flex items-center justify-center preset-outlined-primary-300-700 p-4">300-700</div>
	<div class="flex items-center justify-center preset-outlined-primary-200-800 p-4">200-800</div>
	<div class="flex items-center justify-center preset-outlined-primary-100-900 p-4">100-900</div>
	<div class="flex items-center justify-center preset-outlined-primary-50-950 p-4">50-950</div>
</div>

<div class="container mx-auto grid grid-cols-[200px_minmax(0px,_1fr)_300px] mb-20">
	<aside class="preset-tonal-primary p-4">(sidebar)</aside>
	<main class="preset-tonal-secondary p-4">
			<div class="flex items-center justify-center preset-filled-primary-400-600 p-4">400-600</div>
	<div class="flex items-center justify-center preset-filled-primary-300-700 p-4">300-700</div>
	<div class="flex items-center justify-center preset-filled-primary-200-800 p-4">200-800</div>
	<div class="flex items-center justify-center preset-filled-primary-100-900 p-4">100-900</div>
	<div class="flex items-center justify-center preset-filled-primary-50-950 p-4">50-950</div>
	</main>
	<aside class="preset-tonal-tertiary p-4">(sidebar)</aside>
</div>

<Card/>
