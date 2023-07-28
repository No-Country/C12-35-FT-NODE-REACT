<<<<<<< HEAD
import { NextFunction, Request, Response } from "express";
<<<<<<<< HEAD:server/src/components/Account/middlewares/validateDuplicate.middleware.ts
import db from "../data";
========
import Encryp from "../../../services/Encryp";
>>>>>>>> main:server/src/components/Account/middlewares/validateEmail.middleware.ts
import response from "../../../utils/response";
=======
<<<<<<< HEAD
// import { NextFunction, Request, Response } from "express";
// import userDb from "../../../../services/Auth/data/user.db";
// import response from "../../../../utils/response";
// import { ClientError } from "../../../../utils/errors";

// export default async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { email } = req.body;
//     const user: any = await userDb.findOne({ email });
//     if (user) throw new ClientError("El email que intenta registrar ya está en uso", 404);
//     next();
//   } catch (error: any) {
//     return response(res, error.statusCode, error.message, true);
//   }
// };
=======
import { NextFunction, Request, Response } from "express";
import db from "../data";
import response from "../../../utils/response";
import { ClientError } from "../../../utils/errors";
>>>>>>> main

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
<<<<<<< HEAD
<<<<<<<< HEAD:server/src/components/Account/middlewares/validateDuplicate.middleware.ts
=======
>>>>>>> main
    if (email) {
      const user: any = await db.findOne({ email });
      if (user) throw new ClientError(404, "El email que intenta registrar ya está en uso");
      next();
    }
<<<<<<< HEAD
========

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const result = emailRegex.test(email);
    if (!result) throw new Error("el formato del email es incorrecto");
    next();
>>>>>>>> main:server/src/components/Account/middlewares/validateEmail.middleware.ts
=======
>>>>>>> main
  } catch (error: any) {
    return response(res, error.statusCode, error.message, true);
  }
};
<<<<<<< HEAD
=======
>>>>>>> b822c13 (.)
>>>>>>> main
