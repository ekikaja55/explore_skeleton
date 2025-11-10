export function cekPath(url: string): boolean {
    if (url.startsWith('/dashboard')) return false;
    return true;
  }
