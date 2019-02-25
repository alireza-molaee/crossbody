import { createBrowserHistory } from 'history';

const getBasename = () => {
    return `/`
}

export default createBrowserHistory({
    basename: getBasename(),
});