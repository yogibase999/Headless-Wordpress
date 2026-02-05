export interface MenuItem {
  id: string;
  label: string;
  path: string; // ← required, not optional
  childItems?: {
    nodes?: MenuItem[];
  };
}