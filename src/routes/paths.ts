// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: path("/", "login"),
};

export const PATH_APP = {
  home: "/",
  documents: path("/", "documents"),
  graduate: path("/", "graduate"),
  qualifications: path("/", "qualifications"),
  join: path("/", "join"),
  tranfer: path("/", "tranfer"),
  form: path("/", "form"),
  page403: path("/", "403"),
  page404: path("/", "404"),
  page500: path("/", "500"),
};
