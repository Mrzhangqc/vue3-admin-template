import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
//Imports must start with ./ or ../.
//Imports must end with a file extension
export default {
  plugins: [
    dynamicImportVars({
      include: [],
      exclude: [],
      warnOnError: true
    })
  ]
};