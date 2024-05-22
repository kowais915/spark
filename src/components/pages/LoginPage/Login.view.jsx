import Form from "./components/Form";
import { Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const LoginView = () => {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <Form />
      </div>

      <div className="hidden  bg-red-600 border-1 rounded-bl-[200px] lg:flex flex-col justify-center items-center gap-10">
       
            <div className="flex gap-2 items-center">
              <Bus color="white" size={90} />
              <Button
                variant="outline"
                className="bg-transparent, text-white w-[150px] h-[55px] border-[3px] text-2xl"
              >
                Spark
              </Button>
            </div>
            <Card className="bg-trasparent text-white px-[40px] text-center py-4 border-slate-400">
              <p className="text-[12px]">Learn more about Air Drive on</p>
              <p className="text-3xl">Spark.pl</p>
            </Card>

            <div className="absolute bottom-2 text-white flex gap-2 text-[12px]">
                <Link href="#">
                    License
                </Link>

                <Link href="#">
                   Terms of use
                </Link>

                <Link href="#">
                    Blog
                </Link>
            </div>
     
      </div>
    </div>
  );
};

export default LoginView;
