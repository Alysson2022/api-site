import { con } from './connection.js'

export function Login(email, senha) {
    const comando = 
    `select id_administrador        id,
            ds_email                email
      from  TB_ADMINISTRADOR
      where ds_email                = ?,
      and   ds_senha                = ?`

      const [linhas] = con.query(comando, [email, senha]);
      return linhas[0];
}