import React, { Component } from 'react';
import createFragment from 'react-addons-create-fragment';
import moment from 'moment'
import { markdown } from 'markdown';
import Section from '../Section';
import Loader from '../Loader';
import Filters from '../Filters';


export default class Changelog extends Component {
  constructor (props) {
    super(props);
    this.shouldRenderLoadMore = this.shouldRenderLoadMore.bind(this);
    this.renderLog = this.renderLog.bind(this);
  }

  componentWillMount () {
    this.props.fetchLogs();
  }

  shouldRenderLoadMore () {
    const { loaded, total } = this.props.counts;

    if (loaded < total && !this.props.isFetching) {
      return <button onClick={this.props.fetchLogs}>Load more</button>
    }
  }

  componentWillReceiveProps (nextProps) {
    const { list, isFetching, counts } = nextProps;
    if (list.length < 10 && counts.total > counts.loaded && !isFetching) {
      this.props.fetchLogs();
    }
  }

  generateMessage(item) {
    switch(item.type) {
      case 'CommitCommentEvent':
        return `commented on commit ${item.payload.commit_id} on [${item.repo.name}](${item.repo.url})`
      case 'CreateEvent':
        return `created branch ${item.payload.ref} on [${item.repo.name}](${item.repo.url})`
      case 'DeleteEvent':
        return `deleted branch ${item.payload.ref} from [${item.repo.name}](${item.repo.url})`
      case 'ForkEvent':
        return `forked repository [${item.repo.name}](${item.repo.url})`
      case 'PushEvent':
        return `pushed ${item.payload.commits.length} commits to [${item.repo.name}](${item.repo.url})`
      case 'PullRequestEvent':
        return `${item.payload.action} [#${item.payload.pull_request.number} - ${item.payload.pull_request.title}](${item.payload.pull_request.url}) commits to [${item.repo.name}](${item.repo.url})`;
      case 'IssuesEvent':
        return `${item.payload.action} [#${item.payload.issue.number} - ${item.payload.issue.title}](${item.payload.issue.url}) commits to [${item.repo.name}](${item.repo.url})`;
      case 'IssueCommentEvent':
        return `commented on issue [#${item.payload.issue.number} - ${item.payload.issue.title}](${item.payload.issue.url}) on [${item.repo.name}](${item.repo.url})`
      default:
        return item.type;
    }
  }

  renderLog () {
    const { list } = this.props;

    return <ul>
      { list.map((item, index) => {
        return (
          <li className="github" key={index}>
            <div>
              <span className="indicator"></span>
            </div>
            <div className="time">{moment(item.created_at).fromNow()}</div>
            <div className="measure" dangerouslySetInnerHTML={{ __html: markdown.toHTML(this.generateMessage(item)) }}></div>
          </li>
        )
      }) }
    </ul>;
  }

  render () {
    const { loaded, total } = this.props.counts;

    return (
      <Section tagName='article' className='section measure'>
        <h2 className='measure'>- Github Activity (Previous 30 Events)</h2>
        { this.renderLog() }
        { this.props.isFetching && <Loader />}
        { this.shouldRenderLoadMore() }
      </Section>
    );
  }
}
