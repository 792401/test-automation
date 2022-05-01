import { BASE_URL } from './endpoints';

/**
 * Builds an URL based on given endpoints
 * buildURLPath("users","me") return "myapp/users/me"
 *
 * @param endpoints list of paths
 * @returns myapp/users/me
 */
export function buildURLPath(...endpoints: string[]): string {
    const path = endpoints.join('/');
    const url = `${BASE_URL}/${path}`;

    return url;
}
