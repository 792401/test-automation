import { BASE_URL } from './endpoints';

/**
 * Builds an URL based on given endpoints path
 * Ex: buildURLPath("users","me") returns "myapp/users/me"
 * @param endpoints list of paths
 * @returns string: built URL with endpoint
 */
export function buildURLPath(...endpoints: string[]): string {
    const path = endpoints.join('/');
    const url = `${BASE_URL}/${path}`;

    return url;
}
