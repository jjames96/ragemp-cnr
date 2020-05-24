import dotenv from 'rollup-plugin-dotenv';
import typescript from 'rollup-plugin-typescript2';
import pkg from '../../package.json';

export default {
    input: './Client.ts',
    output: [
        {
            file: '../../client_packages/cnr/index.js',
            format: 'cjs'
        }
    ],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
        dotenv({
            dotenv: require('dotenv')
        }),
        typescript({
            typescript: require('typescript')
        })
    ]
}