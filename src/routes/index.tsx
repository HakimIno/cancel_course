import React, { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import MainLayout from "../layouts";
// guards
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";

// ----------------------------------------------------------------------

const Loadable = (Component: React.FC) => (props: JSX.IntrinsicAttributes) => {
  return (
    <Suspense fallback={<>Loading</>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "login",
      element: (
        <GuestGuard>
          <MainLayout />
        </GuestGuard>
      ),
      children: [{ index: true, element: <Login /> }],
    },
    // Main Routes
    {
      path: "*",
      element: (
        // <AuthGuard>
        // </AuthGuard>
        <MainLayout />
      ),
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "documents",
          children: [
            {
              index: true,
              element: <DocumentPage />,
            },
            {
              path: ":petitionId/create",
              element: <CreateDocumentPage />,
            },
            {
              path: ":orderId/update",
              element: <CreateDocumentPage />,
            },
          ],
        },
        { path: "graduate", element: <>graduate</> },
        { path: "qualifications", element: <>qualifications</> },
        {
          path: "join",
          children: [
            {
              index: true,
              element: <JoinPage />,
            },
            {
              path: ":petitionId/create",
              element: <CreateJoinPage />,
            },
            {
              path: ":orderId/update",
              element: <CreateJoinPage />,
            },
          ],
        },
        {
          path: "tranfer",
          children: [
            {
              index: true,
              element: <TranferPage />,
            },
            {
              path: ":petitionId/create",
              element: <CreateTranferPage />,
            },
            {
              path: ":orderId/update",
              element: <CreateTranferPage />,
            },
          ],
        },
        {
          path: "form",
          children: [
            {
              index: true,
              element: <FormPage />,
            },
            {
              path: ":petitionId/create",
              element: <CreateFormPage />,
            },
            {
              path: ":orderId/update",
              element: <CreateFormPage />,
            },
          ],
        },
        { path: "404", element: <>404</> },
        { path: "403", element: <>403</> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// AUTHENTICATION
export const Login = Loadable(lazy(() => import("../pages/auth/Login")));
export const HomePage = Loadable(lazy(() => import("../pages/HomePage")));

// Document
export const DocumentPage = Loadable(lazy(() => import("../pages/documents")));
export const CreateDocumentPage = Loadable(
  lazy(() => import("../pages/documents/CreateDocForm"))
);
// Join
export const JoinPage = Loadable(lazy(() => import("../pages/joins")));
export const CreateJoinPage = Loadable(
  lazy(() => import("../pages/joins/CreateDocForm"))
);
// Tranfer
export const TranferPage = Loadable(lazy(() => import("../pages/tranfers")));
export const CreateTranferPage = Loadable(
  lazy(() => import("../pages/tranfers/CreateDocForm"))
);
// Tranfer
export const FormPage = Loadable(lazy(() => import("../pages/form")));
export const CreateFormPage = Loadable(
  lazy(() => import("../pages/form/CreateDocForm"))
);
