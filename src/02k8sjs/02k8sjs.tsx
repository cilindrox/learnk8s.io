import * as React from 'react'
import { State, Action, Store } from '../store'
import { Authors } from '../aboutUs'
import { join } from 'path'
import { toVFile } from '../files'

export const ZeroToK8sJs = {
  id: '02k8sjs',
  url: '/nodejs-kubernetes-guide',
  title: 'Hands-on guide: developing & deploying Node.js apps in Kubernetes',
  description: `Learn how to design and architect Node.js apps that leverage Kubernetes and scale to millions of requests.`,
}

export function Register(store: Store) {
  store.dispatch(Action.pages.add(ZeroToK8sJs))
  store.dispatch(
    Action.openGraphs.add({
      id: 'og-02k8sjs',
      pageId: ZeroToK8sJs.id,
      imagePath: 'src/02k8sjs/jury.jpg',
      title: 'Hands-on guide: developing and deploying Node.js apps in Kubernetes',
      description: `Learning how to design and architect applications that leverage Kubernetes is the most valuable skill that you could learn to be successful in deploying and scaling your traffic to millions of requests and beyond.`,
    }),
  )
  store.dispatch(
    Action.blogPosts.add({
      id: 'bp-02k8sjs',
      pageId: ZeroToK8sJs.id,
      authorId: Authors.danielePolencic.id,
      description: `Learning how to design and architect applications that leverage Kubernetes is the most valuable skill that you could learn to be successful in deploying and scaling your traffic to millions of requests and beyond.`,
      title: 'Hands-on guide: developing and deploying Node.js apps in Kubernetes',
      publishedDate: '2019-10-31',

      content: toVFile({ path: join(__dirname, 'content.md') }),
    }),
  )
  store.dispatch(Action.tags.add({ id: ZeroToK8sJs.id + '-general-post', tag: 'general-post', pageId: ZeroToK8sJs.id }))
  store.dispatch(
    Action.relatedBlogs.add({
      id: '02k8sjs-related-0',
      blogPostId: 'bp-02k8sjs',
      content: toVFile({ path: join(__dirname, '02k8sjs-related.md') }),
    }),
  )
  store.dispatch(
    Action.previewPictures.add({
      id: 'v-picture',
      pageId: ZeroToK8sJs.id,
      imagePath: 'src/02k8sjs/jury.svg',
    }),
  )
}
