import { Redirect } from "expo-router";

export default function Root() {
    return <Redirect href="/simulation/testsim" />;
    // Line below is the originally intended route, edit the line above to route anywhere you like
    // return <Redirect href="/(main)" />;
}
