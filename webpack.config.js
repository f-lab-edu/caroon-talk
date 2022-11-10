const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// const mode = process.env.NODE_ENV || "development";
const isDevelopment = false;
const isProduction = !isDevelopment;

module.exports = {
  mode: isProduction ? 'production' : isDevelopment && 'development', // or production
  stats: 'errors-warnings',
  // target: ['browserslist'],
  entry: './src/index.ts', // 초기 파일 경로
  output: {
    filename: 'bundle.js', // js 파일 이름 설정
    path: path.resolve('./dist'), // 빌드 결과물을 생성할 경로(절대경로)
    pathinfo: isDevelopment,
    chunkFilename: 'bundle.chunk.js', // 생성될 청크
    assetModuleFilename: 'assets/[name][ext]', // asset 폴더에 있던 파일들은 dist 내부에 asset 폴더 생성후 이름과 확장자를 그대로 사용하여 저장
    clean: true, // 빌드 이전 결과물 제거
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: ['node_modules'],
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          keep_classnames: undefined,
          keep_fnames: false,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },

  module: {
    rules: [
      // {
      //   'prettier/prettier': [
      //     'error',
      //     {
      //       endOfLine: 'auto',
      //     },
      //   ],
      // },
      {
        test: /\.ts$/,
        exclude: /node_modules/, // node_mudules를 제외한다.
        loader: 'babel-loader',
      },
      {
        test: /\.(sass|scss|css)$/, // 확장자가 scss, css인 모든 파일
        use: ['style-loader', 'css-loader', 'sass-loader'], // 배열의 역순으로 로더가 동작. scss파일을 css파일로 컴파일 -> css-loader를 적용해 모듈화 -> 동적으로 돔에 추가
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset', // resource와 inline 중에서 자동으로 선택
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 크기가 4kb 미만인 파일은 inline 모듈로 처리되고 그렇지 않으면 resource 모듈로 처리
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 템플릿 위치
    }),
  ],
};
