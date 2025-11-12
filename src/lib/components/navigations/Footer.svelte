<script lang="ts">
  import { House, Info, Mail, School, Instagram, MapPin, Phone } from '@lucide/svelte';

  const navLinks = [
    { name: 'Home', href: '/', icon: House },
    { name: 'About', href: '#about', icon: Info },
    { name: 'Guide', href: '#guide', icon: Info },
    { name: 'Price', href: '#price', icon: Mail },
    { name: 'FAQ', href: '#faq', icon: Mail }
  ];

  const socials = [
    { href: 'https://istts.ac.id', icon: School, label: 'Web', color: 'bg-blue-500' },
    { href: 'https://instagram.com/haloistts', icon: Instagram, label: 'Instagram', color: 'bg-red-500' }
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Jl. Ngagel Jaya Tengah 73-77, Surabaya' },
    { icon: Phone, text: '+62 31 5031111' },
    { icon: Mail, text: 'info@istts.ac.id' }
  ];
</script>

<footer class="relative w-full overflow-hidden bg-white dark:bg-black">

  <div class="absolute inset-0 z-0">
    <div class="h-full w-full" style="background-image:
      linear-gradient(to right, rgb(0 0 0 / 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(0 0 0 / 0.08) 1px, transparent 1px);
      background-size: 60px 60px;">
    </div>

    <div class="absolute inset-0 hidden dark:block" style="background-image:
      linear-gradient(to right, rgb(255 255 255 / 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(255 255 255 / 0.08) 1px, transparent 1px);
      background-size: 60px 60px;">
    </div>
  </div>

  <div class="relative z-10 flex h-2 border-t-4 border-black dark:border-white">
    <div class="w-1/4 bg-yellow-400"></div>
    <div class="w-1/4 bg-blue-500"></div>
    <div class="w-1/4 bg-red-500"></div>
    <div class="w-1/4 bg-green-400"></div>
  </div>

  <div class="relative z-10 mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">

    <div class="grid gap-8 md:grid-cols-3 md:gap-12">

      <div class="space-y-4">
        <div class="inline-block border-3 border-black bg-white px-4 py-2 shadow-[4px_4px_0_#000] dark:border-white dark:bg-black dark:shadow-[4px_4px_0_#fff]">
          <h2 class="text-2xl font-black uppercase tracking-tight text-black dark:text-white">
            iSTTS<span class="text-blue-600 dark:text-blue-400">-exam</span>
          </h2>
        </div>

        <p class="text-sm font-semibold leading-relaxed text-gray-700 dark:text-gray-300">
          Membangun standar evaluasi berbasis inovasi dan keunggulan akademik.
        </p>

        <div class="space-y-2">
          {#each contactInfo as info}
            <div class="flex items-start gap-2">
              <div class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-black bg-white dark:border-white dark:bg-black">
                <svelte:component this={info.icon} class="h-3 w-3 text-black dark:text-white" strokeWidth={2.5} />
              </div>
              <span class="text-xs font-medium text-gray-700 dark:text-gray-300">
                {info.text}
              </span>
            </div>
          {/each}
        </div>
      </div>

      <div class="space-y-4">
        <div class="inline-block border-2 border-black bg-gray-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0_#000] dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-[2px_2px_0_#fff]">
          Quick Links
        </div>

        <nav class="grid grid-cols-2 gap-3 md:grid-cols-1">
          {#each navLinks as link}
            <a
              href={link.href}
              class="group flex items-center gap-2 border-2 border-black bg-white px-3 py-2 text-sm font-bold uppercase tracking-tight text-black shadow-[3px_3px_0_#000] transition-all duration-200 hover:shadow-[4px_4px_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none dark:border-white dark:bg-black dark:text-white dark:shadow-[3px_3px_0_#fff] dark:hover:shadow-[4px_4px_0_#fff] dark:active:shadow-none"
            >
              <svelte:component this={link.icon} class="h-4 w-4" strokeWidth={2.5} />
              <span>{link.name}</span>
            </a>
          {/each}
        </nav>
      </div>

      <div class="space-y-4">
        <div class="inline-block border-2 border-black bg-gray-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0_#000] dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-[2px_2px_0_#fff]">
          Follow Us
        </div>

        <div class="flex flex-wrap gap-3">
          {#each socials as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              class="group flex items-center gap-2 border-3 border-black px-4 py-3 shadow-[4px_4px_0_#000] transition-all duration-200 hover:shadow-[6px_6px_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none dark:border-white dark:shadow-[4px_4px_0_#fff] dark:hover:shadow-[6px_6px_0_#fff] dark:active:shadow-none {social.color}"
            >
              <svelte:component this={social.icon} class="h-5 w-5 text-white" strokeWidth={2.5} />
              <span class="text-sm font-bold uppercase text-white">
                {social.label}
              </span>
            </a>
          {/each}
        </div>

        <div class="border-3 border-black bg-yellow-50 p-4 shadow-[4px_4px_0_#000] dark:border-white dark:bg-gray-900 dark:shadow-[4px_4px_0_#fff]">
          <p class="text-xs font-bold uppercase text-gray-900 dark:text-gray-100">
            Stay Updated!
          </p>
          <p class="mt-1 text-xs text-gray-700 dark:text-gray-300">
            Dapatkan info terbaru seputar ujian dan beasiswa
          </p>
        </div>
      </div>
    </div>

    <div class="my-8 h-[3px] bg-black dark:bg-white md:my-12"></div>

    <div class="flex flex-col items-center justify-between gap-4 md:flex-row">

      <div class="border-2 border-black bg-white px-4 py-2 shadow-[3px_3px_0_#000] dark:border-white dark:bg-black dark:shadow-[3px_3px_0_#fff]">
        <p class="text-xs font-bold text-gray-900 dark:text-gray-100">
          © {new Date().getFullYear()} iSTTS. All rights reserved.
        </p>
      </div>


    </div>
  </div>
</footer>
