declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

interface MockHttp {
  data: unknown;
  method: string;
  url: string | RegExp;
}
