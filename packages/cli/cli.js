import gitClone from './utils/gitClone.js';
import prompts from 'prompts';

const promptsOptions = [
  {
    type: 'text',
    name: 'name',
    message: '请输入项目名称'
  },
  {
    type: 'select', //单选
    name: 'template',
    message: '请选择一个模板',
    choices: [
      { title: 'kitty-ui', value: 1 },
      { title: 'easyest', value: 2 }
    ]
  }
];

const remoteList = {
  1: 'https://gitee.com/geeksdidi/kittyui.git',
  2: 'https://github.com/qddidi/easyest.git'
};
const getUserInfo = async () => {
  const res = await prompts(promptsOptions);
  if (!res.name || !res.template) return;
  gitClone(`direct:${remoteList[res.template]}`, res.name, { clone: true });
};

const runOptions = () => {
  getUserInfo();
};

runOptions();
