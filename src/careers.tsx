import React from 'react'
import { Navbar, Footer, Consultation, Html, Head, Body, OpenGraph } from './layout.v3'
import { State, Action, getConfig, Store, Selector } from './store'
import { defaultAssetsPipeline } from './optimise'
import { join } from 'path'
import { tachyons } from './tachyons/tachyons'
import { JsonLd } from 'react-schemaorg'
import { JobPosting } from 'schema-dts'

export const Career = {
  id: 'careers',
  url: '/careers',
  title: 'Careers ⎈ Learnk8s',
  description: 'Join Learnk8s and help others learn Docker and Kubernetes.',
}

export function Register(store: Store) {
  store.dispatch(Action.pages.add(Career))
  store.dispatch(
    Action.openGraphs.add({
      id: 'og-career',
      pageId: Career.id,
      imagePath: 'assets/open_graph_preview.png',
      title: 'Careers',
      description: 'Join Learnk8s and help others learn Docker and Kubernetes.',
    }),
  )
}

export function Mount({ store }: { store: Store }) {
  const state = store.getState()
  defaultAssetsPipeline({
    jsx: renderPage(state),
    isOptimisedBuild: getConfig(state).isProduction,
    siteUrl: `${getConfig(state).protocol}://${getConfig(state).hostname}`,
    url: Career.url,
    outputFolder: getConfig(state).outputFolder,
  })
}

function renderPage(state: State) {
  const page = Selector.pages.selectAll(state).find(it => it.id === Career.id)!
  const openGraph = Selector.openGraphs.selectAll(state).find(it => it.pageId === Career.id)
  const currentAbsoluteUrl = `${getConfig(state).protocol}://${join(getConfig(state).hostname, page.url)}`
  return (
    <Html>
      <Head title={page.title} description={page.description}>
        {openGraph ? (
          <OpenGraph
            title={openGraph.title}
            description={openGraph.description}
            image={openGraph.imagePath}
            currentAbsoluteUrl={currentAbsoluteUrl}
          />
        ) : null}
        <style>{tachyons}</style>
        <link rel='stylesheet' href='assets/style.css' />
        <link rel='canonical' href={currentAbsoluteUrl} />
        <JsonLd<JobPosting>
          item={{
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            title: 'Kubernetes engineer',
            description: 'Create automation scripts for Kubernetes based applications',
            identifier: {
              '@type': 'PropertyValue',
              name: 'Learnk8s',
              value: '4cb29126-aa9a-4354-890c-5130a24aeeeb',
            },
            hiringOrganization: {
              '@type': 'Organization',
              name: 'Learnk8s',
              sameAs: 'https://learnk8s.io',
            },
            employmentType: 'CONTRACT',
            jobLocationType: 'TELECOMMUTE',
            skills: 'kubernetes, docker, containers',
            datePosted: '01-01-2020',
          }}
        ></JsonLd>
      </Head>
      <Body>
        <div className='trapezoid-1 white pt3 pt0-ns pb2 pb4-ns'>
          <Navbar />

          <section className='ph5-l'>
            <div className='w-100'>
              <h1 className='f1 pl3 pl4-ns f-subheadline-l'>Careers</h1>
              <h2 className='f4 normal measure-narrow lh-copy ph3 ph4-ns f3-l pb4'>Help others learn Kubernetes.</h2>
            </div>
          </section>
        </div>

        <section className='bg-black-025 black-70 relative z-999 w-90-m w-70-l center pa3 pa4-ns mb3 mb5-ns lh-copy'>
          <h2 className='navy'>Freelance Kubernetes engineer - REMOTE</h2>
          <p>learnk8s is looking for a talented engineer on a freelance basis to help:</p>
          <ul className=''>
            <li>create automation scripts for Kubernetes based applications</li>
            <li>authoring and designing training material for educational content</li>
          </ul>
          <h3 className='navy'>About you</h3>
          <ul className=''>
            <li>You are a talented engineer</li>
            <li>You are experienced in Docker</li>
            <li>You can clearly articulate how to architect applications to best leverage microservices</li>
            <li>You deployed and scaled applications on Kubernetes</li>
            <li>You're patient and understand the value in pair programming and knowledge sharing</li>
            <li>You fluent in either Java, Scala, Python or Node.js</li>
            <li>You use CI/CD on a daily basis and can't imagine a world without it</li>
          </ul>
          <h3 className='navy'>Arrangement & renumeration</h3>
          <p>This is an ongoing REMOTE engagement on a freelance basis. Please get in touch to discuss your rate.</p>
          <h3 className='navy'>How to apply</h3>
          <p>
            Write a deployment for Kubernetes. You can find the details on how to complete the challenge at the
            following link:{' '}
            <a href='https://github.com/learnk8s/kubernetes-challenge' className='link navy underline'>
              https://github.com/learnk8s/kubernetes-challenge
            </a>
            .
          </p>
          <p>
            Once you solved the challenge, please send us a link with your repository and a link to your Linkedin
            profile at{' '}
            <a href='mailto:careers@learnk8s.io' className='link navy underline'>
              careers@learnk8s.io
            </a>
            .
          </p>
          <a href='mailto:careers@learnk8s.io' className='link dib white bg-blue br1 pa3 b f5 shadow-3 mv3'>
            Apply now &#8594;
          </a>
        </section>
        <Consultation />
        <Footer />
      </Body>
    </Html>
  )
}
