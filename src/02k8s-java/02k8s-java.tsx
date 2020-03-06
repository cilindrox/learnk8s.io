import * as React from 'react'
import { Store } from 'redux'
import { State, Actions, Action } from '../store'
import { Authors } from '../aboutUs'
import { join } from 'path'
import { toVFile } from '../files'

export const ZeroToK8sJava = {
  id: '02k8s-java',
  url: '/java-kubernetes-guide',
  title: 'Hands-on guide: developing & deploying Java apps in Kubernetes',
  description: `Learn how to design and architect Java apps that leverage Kubernetes and scale to millions of requests.`,
}

export function Register(store: Store<State, Actions>) {
  store.dispatch(Action.registerPage(ZeroToK8sJava))
  store.dispatch(
    Action.registerOpenGraph({
      id: 'og-02k8s-java',
      pageId: ZeroToK8sJava.id,
      image: (
        <img src='src/02k8s-java/jury.jpg' alt='Hands-on guide: developing and deploying Java apps in Kubernetes' />
      ),
      title: 'Hands-on guide: developing and deploying Java apps in Kubernetes',
      description: `Learning how to design and architect applications that leverage Kubernetes is the most valuable skill that you could learn to be successful in deploying and scaling your traffic to millions of requests and beyond.`,
    }),
  )
  store.dispatch(
    Action.registerBlogPost({
      id: 'bp-02k8s-java',
      pageId: ZeroToK8sJava.id,
      authorId: Authors.danielePolencic.id,
      description: `Learning how to design and architect applications that leverage Kubernetes is the most valuable skill that you could learn to be successful in deploying and scaling your traffic to millions of requests and beyond.`,
      title: 'Hands-on guide: developing and deploying Java apps in Kubernetes',
      publishedDate: '2020-03-11',

      content: toVFile({ path: join(__dirname, 'content.md') }),
    }),
  )
  store.dispatch(Action.assignTag({ id: 'general-post', pageId: ZeroToK8sJava.id }))
  store.dispatch(
    Action.registerBlogPostMarkdownBlock({
      id: '02k8s-java-related-0',
      blogPostId: 'bp-02k8s-java',
      content: toVFile({ path: join(__dirname, '02k8s-java-related.md') }),
    }),
  )
  store.dispatch(
    Action.registerPreviewPicture({
      id: 'v-picture',
      pageId: ZeroToK8sJava.id,
      image: <img src='src/02k8s-java/jury.svg' alt={ZeroToK8sJava.title} />,
    }),
  )
}