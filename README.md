# TaskFlow — Aplicativo de tarefas

Projeto acadêmico desenvolvido com React Native e Expo.

## Como executar

1. Instale Node.js LTS e Visual Studio Code.
2. Extraia esta pasta e abra-a no VS Code.
3. Abra o terminal dentro da pasta do projeto.
4. Execute:

```bash
npm install
npx expo start
```

5. Para abrir no celular, instale o Expo Go e leia o QR Code exibido no terminal. Também é possível usar um emulador Android.

## Telas

- **Home:** lista tarefas, mostra estatísticas e filtra por status.
- **Nova tarefa:** formulário controlado para cadastrar tarefas.
- **Detalhes:** recebe os dados da tarefa por `route.params` e permite alterar seu status.

## Requisitos técnicos contemplados

- React Native + Expo.
- Três telas com `createNativeStackNavigator`.
- Componentes próprios separados: `AppHeader`, `PrimaryButton`, `TaskCard` e `StatCard`.
- Componentes recebem dados e callbacks por `props`, com desestruturação.
- `useState` controla tarefas, filtro, título, descrição e categoria.
- `useEffect` carrega os dados iniciais quando o app abre e limpa o temporizador.
- Navegação para detalhes com passagem de parâmetros via `navigation.navigate('Details', { task })`.
- Arquivos organizados em pastas.

## Observação

Os dados ficam em memória durante a execução. Ao fechar completamente o aplicativo, a lista volta aos exemplos iniciais. Persistência em banco ou armazenamento local não foi exigida no escopo implementado.
