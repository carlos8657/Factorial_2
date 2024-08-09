import { Ubuntu } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";
import SideBar from "@/components/SideBar";
import { Metadata } from "next";

const ubuntuMono = Ubuntu({
	weight: '300',
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Factorial 2",
	description: "Aplicacion para recursos humanos",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

	return (
		<html lang="en">
			<body className={ubuntuMono.className}>
				<AppRouterCacheProvider>
					<div className="flex">
						<SideBar />
						<main className="w-5/6">{children}</main>
					</div>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
