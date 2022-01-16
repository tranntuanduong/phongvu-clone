import { NextRouter } from "next/router";

export const changePid = (pid: string, router: NextRouter) => {
  if (pid === 'account') {
    router.push(`/account`);
  } else {
    router.push(`/account/${pid}`);
  }

  console.log("object", pid);
};