import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import { Companies } from './collections/Companies';
import { Projects } from './collections/Projects';
import Media from './collections/Media';
import Alert from './blocks/Alert';
import Content from './blocks/Content';
import Alerts from './blocks/Alert';
import Posts from './collections/Posts';
import Pages from './collections/Pages';
import Navigation from './collections/Navigation';
import Categories from './collections/Categories';

const mockModulePath = path.resolve(__dirname, 'mocks', 'emptyFuntion.tsx')

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL,
  admin: {
    user: Users.slug,

  },
  cors: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(',') : [],
  csrf: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(',') : [],

  collections: [
    Media,
    Content,
    Alerts,
    Users,
    Posts,
    Pages,
    Categories,
  ],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    disable: true,
  },
  plugins: [
    payloadCloud()
  ]
});
