import React, { Fragment } from "react";
// eslint-disable-next-line
import { Route, RouteComponentProps, Switch, match } from "react-router";
import ArticleDetail from "../components/article/ArticleDetail";
import ArticleList from "../components/article/ArticleList";
import CreateArticle from "../components/article/CreateArticle";
import EditArticle from "../components/article/EditArticle";

interface Props extends RouteComponentProps<any> {}

interface States {}

export default class Articles extends React.Component<Props, States> {
    render(): any {
        const match: match<any> = this.props.match;
        return <Fragment>
            <Switch>
                <Route exact path={match.url} render={(props) => <ArticleList {...props} />} />
                <Route path={`${match.url}/create`} render={(props) => <CreateArticle {...props} />} />
                <Route path={`${match.url}/edit/:articleId`} render={(props) => <EditArticle {...props} />} />
                <Route path={`${match.url}/:articleId`} render={(props) => <ArticleDetail {...props} />} />
            </Switch>
        </Fragment>;
    }
}