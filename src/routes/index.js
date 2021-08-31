import Header from '../templates/header';
import character from '../pages/character';
import error404 from '../pages/error404';
import home from '../pages/home';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': home,
    '/:id': character,
    '/contact': 'contact'
};

const router = async() => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : error404;
    content.innerHTML = await render();
};

export default router;