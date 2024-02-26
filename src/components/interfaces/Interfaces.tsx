export interface RouteComponent {
  path: string;
  component: JSX.Element;
  props?: unknown;
}

export interface ContactUs {
  name: string;
  email: string;
  phone: number;
  message: string;
}
