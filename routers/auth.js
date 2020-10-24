import express from 'express';

const router = express.Router();

router.use('/', (req, res, next) => {
    if(req.query.key !== 'amir'){
        res.sendStatus(401);
    }
    next();
});

export default router;