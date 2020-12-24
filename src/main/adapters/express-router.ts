import { Request, Response } from 'express';

import { IController } from '@/contracts/http/IController';

export const adaptExpressRoute = (controller: IController) => {
  return async (req: Request, res: Response): Promise<Response> => {
    const httpResponse = await controller.handle({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    return res.status(httpResponse.statusCode).json(httpResponse.data);
  };
};
