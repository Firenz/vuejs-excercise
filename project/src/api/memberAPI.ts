import { Member, createDefaultMember } from "../model/member";

export const getAllMembers = (organizationName: string): Promise<Member[]> => {
  const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

  return fetch(gitHubMembersUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveMembers(data));
};

const resolveMembers = (data: any): Promise<Member[]> => {
  const members = data.map(gitHubMember => {
    let member: Member = createDefaultMember();

    member.id = gitHubMember.id;
    member.login = gitHubMember.login;
    member.avatar_url = gitHubMember.avatar_url;
    member.name = gitHubMember.name;
    member.html_url = gitHubMember.html_url;
    member.bio = gitHubMember.bio;
    member.company = gitHubMember.company;
    member.blog = gitHubMember.blog;
    member.location = gitHubMember.location;
    member.email = gitHubMember.email;
    member.public_repos = gitHubMember.public_repos;
    member.followers = gitHubMember.followers;
    member.following = gitHubMember.following;

    return member;
  });

  return Promise.resolve(members);
};

export const getUser = (username: string): Promise<Member> => {
  const gitHubUserUrl: string = `https://api.github.com/users/${username}`;

  return fetch(gitHubUserUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveUser(data));
};

const resolveUser = (data: any): Promise<Member> => {
  let user: Member = createDefaultMember();

  user.id = data.id;
  user.login = data.login;
  user.avatar_url = data.avatar_url;
  user.name = data.name;
  user.html_url = data.html_url;
  user.bio = data.bio;
  user.company = data.company;
  user.blog = data.blog;
  user.location = data.location;
  user.email = data.email;
  user.public_repos = data.public_repos;
  user.followers = data.followers;
  user.following = data.following;

  return Promise.resolve(user);
};

const checkStatus = (response: Response): Promise<Response> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    let error = new Error(response.statusText);
    throw error;
  }
};

const parseJSON = (response: Response) => {
  return response.json();
};
