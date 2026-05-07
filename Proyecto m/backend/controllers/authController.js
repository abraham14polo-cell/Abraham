const db = require('../config/db');

exports.login = (req, res) => {

    const {usuario, clave} = req.body;

    db.query(

        'SELECT * FROM Usuario WHERE nombreUsuario=? AND clave=?',

        [usuario, clave],

        (err, data) => {

            if(err){
                return res.status(500).json(err);
            }

            if(data.length > 0){

                req.session.user = data[0];

                res.json({
                    ok:true
                });

            }else{

                res.json({
                    ok:false
                });

            }

        }

    );

};