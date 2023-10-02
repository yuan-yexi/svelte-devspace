<script>
  import { page } from "$app/stores";

  const navBarSelected =
    "text-sky-500 w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 after:bg-sky-500";
  const navBarUnselected =
    "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400 w-full h-6 flex items-center justify-center";

  let isHomeActive = false
  let isAboutActive = false
  let isProjectActive = false
  let isResumeActive = false
  let isSubscribeActive = false

  let activeHomeClass = navBarUnselected
  let activeAboutClass = navBarUnselected
  let activeProjectClass = navBarUnselected
  let activeResumeClass = navBarUnselected
  let activeSubscribeClass = navBarUnselected


  function setActiveClass(currentPathName) {
    switch(currentPathName) {
      case '/':
        isHomeActive = true
        isAboutActive = false
        isProjectActive = false
        isResumeActive = false
        isSubscribeActive = false
        break
      case '/about':
        isHomeActive = false
        isAboutActive = true
        isProjectActive = false
        isResumeActive = false
        isSubscribeActive = false
        break
      case '/project':
        isHomeActive = false
        isAboutActive = false
        isProjectActive = true
        isResumeActive = false
        isSubscribeActive = false
        break
      case '/resume':
        isHomeActive = false
        isAboutActive = false
        isProjectActive = false
        isResumeActive = true
        isSubscribeActive = false
        break
      case '/subscribe':
        isHomeActive = false
        isAboutActive = false
        isProjectActive = false
        isResumeActive = false
        isSubscribeActive = true
        break
    }
  }

  $: {
    let currentPathName = $page.url.pathname;
    setActiveClass(currentPathName)
    activeHomeClass = isHomeActive ? navBarSelected : navBarUnselected
    activeAboutClass = isAboutActive ? navBarSelected : navBarUnselected
    activeProjectClass = isProjectActive ? navBarSelected : navBarUnselected
    activeResumeClass = isResumeActive ? navBarSelected : navBarUnselected
    activeSubscribeClass = isSubscribeActive ? navBarSelected : navBarUnselected
  }
</script>

<body
  class="font-inter antialiased bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-200 tracking-tight"
>
  <div class="max-w-7xl mx-auto">
    <div class="min-h-screen flex">
      <!-- Side navigation -->
      <div
        class="sticky top-0 w-16 md:w-24 shrink-0 h-screen overflow-y-auto no-scrollbar border-r border-slate-200 dark:border-slate-800"
      >
        <div
          class="h-full flex flex-col justify-between after:flex-1 after:mt-auto"
        >
          <div class="flex-1" />
          <div class="flex-1 grow flex items-center">
            <nav class="w-full">
              <ul class="space-y-4">
                <li class="py-2">
                  <a class={activeHomeClass} href="/">
                    <span class="sr-only">Home</span>
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="19"
                    >
                      <path fill-opacity=".16" d="M4 7v11h13V7l-6.5-5z" />
                      <path
                        d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="py-2">
                  <a
                    class="{activeAboutClass}"
                    href="/about"
                  >
                    <span class="sr-only">About</span>
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <path
                        fill-opacity=".16"
                        d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
                      />
                      <path
                        d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="py-2">
                  <a
                    class="{activeProjectClass}"
                    href="/project"
                  >
                    <span class="sr-only">Projects</span>
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <path fill-opacity=".16" d="M1 4h18v10H1z" />
                      <path
                        d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="py-2">
                  <a
                    class="{activeResumeClass}"
                    href="/resume"
                  >
                    <span class="sr-only">Resume</span>
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                    >
                      <path
                        fill-opacity=".16"
                        fill-rule="nonzero"
                        d="M1 5h16v14H1z"
                      />
                      <path
                        fill-rule="nonzero"
                        d="M2 6v12h14V6H2Zm16-2v16H0V4h18ZM2 2V0h14v2H2Z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="py-2">
                  <a
                    class="{activeSubscribeClass}"
                    href="/subscribe"
                  >
                    <span class="sr-only">Subscribe</span>
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                    >
                      <path fill-opacity=".16" d="m13.4 18-3-7.4-7.4-3L19 2z" />
                      <path
                        d="M13.331 15.169 17.37 3.63 5.831 7.669l5.337 2.163 2.163 5.337Zm-3.699-3.801L.17 7.53 20.63.37l-7.161 20.461-3.837-9.463Z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <!-- SIDEBAR NAVIGATOR END -->

      <!-- Main content -->
      <main class="grow overflow-hidden px-6">
        <div class="w-full h-full max-w-[1072px] mx-auto flex flex-col">
          <!-- Header -->
          <header>
            <div class="flex items-center justify-between h-16 before:block">
              <div class="grow flex justify-end space-x-4" />
            </div>
          </header>

          <!-- Hero -->
          <section>
            <!-- Content -->
            <div
              class="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20"
            >
              <!-- Middle area -->
              <slot />

              <!-- Right sidebar -->
              <aside class="md:w-[240px] lg:w-[300px] shrink-0">
                <div class="space-y-6">
                  <!-- Newsletter widget -->
                  <div
                    class="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5"
                  >
                    <div class="text-center mb-1">
                      <div class="text-center mb-8">
                        <div class="font-aspekta font-[650] mb-1">
                          Never miss an update!
                        </div>
                        <p class="text-sm text-slate-500 dark:text-slate-400">
                          Subscribe and join 100K+ developers.
                        </p>
                      </div>
                      <form>
                        <div class="mb-2">
                          <label class="sr-only" for="newsletter"
                            >Your email…</label
                          >
                          <input
                            id="newsletter"
                            type="email"
                            class="form-input py-1 w-full"
                            placeholder="Your email…"
                          />
                        </div>
                        <button
                          class="btn-sm w-full text-slate-100 bg-sky-500 hover:bg-sky-600"
                          type="submit">Subscribe</button
                        >
                      </form>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <!-- Footer -->
            <footer class="border-t border-slate-200 dark:border-slate-800">
              <div class="py-8">
                <div
                  class="text-center md:flex md:items-center md:justify-between"
                >
                  <!-- Social links -->
                  <ul
                    class="inline-flex mb-4 md:order-1 md:ml-4 md:mb-0 space-x-2"
                  >
                    <li>
                      <a
                        class="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
                        href="#0"
                        aria-label="Twitter"
                      >
                        <svg
                          class="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        class="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
                        href="#0"
                        aria-label="YouTube"
                      >
                        <svg
                          class="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.8 12.8c-.2-1.3-.8-2.2-2.2-2.4C19.4 10 16 10 16 10s-3.4 0-5.6.4c-1.4.2-2.1 1.1-2.2 2.4C8 14.1 8 16 8 16s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4 2.2.4 5.6.4 5.6.4s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2ZM14 19v-6l5 3-5 3Z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        class="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
                        href="#0"
                        aria-label="Github"
                      >
                        <svg
                          class="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        class="flex justify-center items-center text-sky-500 hover:text-sky-600 transition duration-150 ease-in-out"
                        href="#0"
                        aria-label="Telegram"
                      >
                        <svg
                          class="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>

                  <!-- Copyright -->
                  <div class="text-sm text-slate-500 dark:text-slate-400">
                    Copyright &copy; Cruip. All rights reserved.
                  </div>
                </div>
              </div>
            </footer>
          </section>
        </div>
      </main>
    </div>
  </div>
</body>
