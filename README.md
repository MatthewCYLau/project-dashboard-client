# Project Dashboard Client

A React TypeScript app which tracks skills used in various projects

![cicd cloud run workflow](https://github.com/MatthewCYLau/project-dashboard-client/actions/workflows/cicd-cloud-run.yml/badge.svg)

App URL [here](https://project-dashboard-client-3i2mtbjusq-ew.a.run.app/)

Back-end Python Flask project can be found [here](https://github.com/MatthewCYLau/python-flask-gcp)

## Build/run app locally

- Create a `.env.local` file with the following, and place at project root directory:

```bash
REACT_APP_API_BASE_URL=<API-BASE-URL>
```

- Run `npm run start` and visit app at `http://localhost:3000`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
