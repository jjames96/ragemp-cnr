import typescript from 'rollup-plugin-typescript2';
import pkg from '../../package.json';

export default {
    input: './Server.ts',
    output: [
        {
            file: '../../packages/cnr/index.js',
            format: 'cjs'
        }
    ],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
        typescript({
            typescript: require('typescript')
        })
    ]
}