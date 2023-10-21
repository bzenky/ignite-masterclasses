import { Suspense } from 'react'
import { GithubProfile } from './components/github-profile'
import { LongWaitComponent } from './components/long-wait-component'

export default async function Home() {
  // in this case it will load the global loading
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam atque
        vero, doloribus dolor ducimus eveniet accusantium nostrum, repellendus
        fugiat ea, sapiente quia quo earum. Sequi ducimus doloribus ipsa
        voluptas totam.
      </p>

      <Suspense fallback={<p>Loading long wait component...</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Loading github profile...</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
