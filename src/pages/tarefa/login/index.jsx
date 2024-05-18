import React, { useState } from 'react';
import { Button, Grid, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, FormControl, InputLabel, Input, FormHelperText, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, TextField, MenuItem, Select } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Login = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Perfil', 'Mensagens', 'Menu', 'Trocar de Usuário', 'Sair'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <AccountCircleIcon />}
                {index === 1 && <MessageIcon />}
                {index === 2 && <MenuIcon />}
                {index === 3 && <SwitchAccountIcon />}
                {index === 4 && <ExitToAppIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [login, setLogin] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [email, setEmail] = useState(''); 
  const [telefone, setTelefone] = useState(''); 

  const [tarefas, setTarefas] = useState([
    {
      idTarefa: 1,
      tituloTarefa: 'Cadastro',
      descricaoTarefa: 'Nome',
      inicioTarefa: '01/05/2024',
      fimTarefa: '02/05/2024',
      statusTarefa: 'Concluída',
      recursoTarefa: 'Em processo',
      prioridade: 'Alta',
      categoria: 'Categoria 1',
      responsavel: 'Responsável 1',
    },
    {
      idTarefa: 2,
      tituloTarefa: 'Cadastro',
      descricaoTarefa: 'Nome',
      inicioTarefa: '01/06/2024',
      fimTarefa: '03/06/2024',
      statusTarefa: 'Concluída',
      recursoTarefa: 'Em processo',
      prioridade: 'Média',
      categoria: 'Categoria 2',
      responsavel: 'Responsável 2',
    }
  ]);

  const [novaTarefa, setNovaTarefa] = useState({
    tituloTarefa: '',
    descricaoTarefa: '',
    inicioTarefa: '',
    fimTarefa: '',
    statusTarefa: '',
    recursoTarefa: '',
    prioridade: '',
    categoria: '',
    responsavel: '',
  });

  const handleEditar = (id) => {
    console.log('Editar item com id:', id);
  };

  const handleDeletar = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.idTarefa !== id));
  };

  const handleAdicionarTarefa = () => {
    setTarefas([
      ...tarefas,
      { ...novaTarefa, idTarefa: tarefas.length + 1 },
    ]);
    setNovaTarefa({
      tituloTarefa: '',
      descricaoTarefa: '',
      inicioTarefa: '',
      fimTarefa: '',
      statusTarefa: '',
      recursoTarefa: '',
      prioridade: '',
      categoria: '',
      responsavel: '',
    });
  };

  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="flex-end" alignItems="flex-start">
          <Button onClick={toggleDrawer('right', true)}>Menu</Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="nomeLogin">Nome</InputLabel>
            <Input id="nomeLogin" aria-describedby="nomeLogin_helper_text" value={login} onChange={e => { setLogin(e.target.value) }} />
            <FormHelperText id="nomeLogin_helper_text">Digite seu nome completo</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="tarefa_descricao">Data de nascimento</InputLabel>
            <Input id="tarefa_descricao" aria-describedby="tarefa_descricao_helper_text" value={descricaoTarefa} onChange={e => { setDescricaoTarefa(e.target.value) }} />
            <FormHelperText id="tarefa_descricao_helper_text">Digite sua data de nascimento</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <FormHelperText id="email_helper_text">Digite seu endereço de email</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="telefone">Telefone</InputLabel>
            <Input id="telefone" type="tel" value={telefone} onChange={e => setTelefone(e.target.value)} />
            <FormHelperText id="telefone_helper_text">Digite seu número de telefone</FormHelperText>
          </FormControl>
        </Grid>
        <Divider />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Título da Tarefa"
              value={novaTarefa.tituloTarefa}
              onChange={e => setNovaTarefa({ ...novaTarefa, tituloTarefa: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Descrição"
              value={novaTarefa.descricaoTarefa}
              onChange={e => setNovaTarefa({ ...novaTarefa, descricaoTarefa: e.target.value })}
            />
          </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Responsável"
                value={novaTarefa.responsavel}
                onChange={e => setNovaTarefa({ ...novaTarefa, responsavel: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleAdicionarTarefa}>
                Adicionar Tarefa
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Título</TableCell>
                  <TableCell align="right">Descrição</TableCell>
                  <TableCell align="right">Responsável</TableCell>
                  <TableCell align="center">Editar</TableCell>
                  <TableCell align="center">Deletar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tarefas.map((row, indice) => (
                  <TableRow
                    key={indice}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.idTarefa}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.tituloTarefa}
                    </TableCell>
                    <TableCell align="right">{row.descricaoTarefa}</TableCell>
                    <TableCell align="right">{row.inicioTarefa}</TableCell>
                    <TableCell align="right">{row.fimTarefa}</TableCell>
                    <TableCell align="right">{row.statusTarefa}</TableCell>
                    <TableCell align="right">{row.recursoTarefa}</TableCell>
                    <TableCell align="right">{row.prioridade}</TableCell>
                    <TableCell align="right">{row.categoria}</TableCell>
                    <TableCell align="right">{row.responsavel}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="success" onClick={() => handleEditar(row.idTarefa)}>
                        <EditIcon fontSize="small" />
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="error" onClick={() => handleDeletar(row.idTarefa)}>
                        <DeleteIcon fontSize="small" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    );
}

export default Login;

