export interface Member {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  html_url: string;
  bio: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  public_repos: number;
  followers: number;
  following: number;
}

export const createDefaultMember = () => ({
  id: -1,
  login: "",
  avatar_url: "",
  name: "",
  html_url: "",
  bio: "",
  company: "",
  blog: "",
  location: "",
  email: "",
  public_repos: -1,
  followers: -1,
  following: -1
});
