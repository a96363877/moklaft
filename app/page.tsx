import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertCircle,
  Car,
  FileText,
  Shield,
  AlertTriangle,
  Ban,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function TrafficViolationsInfoPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        المخالفات المرورية - شرح وتوضيح
      </h1>

      <div className="max-w-3xl mx-auto">
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>معلومات هامة</AlertTitle>
          <AlertDescription>
            هذه الصفحة تقدم شرحًا توضيحيًا للمخالفات المرورية والشروط والأحكام
            المتعلقة بها.
          </AlertDescription>
        </Alert>

        {/* Main explanation section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>ما هي المخالفات المرورية؟</span>
              <Car className="h-5 w-5" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-right">
            <p>
              المخالفات المرورية هي انتهاكات لقوانين وأنظمة المرور المعمول بها،
              والتي تهدف إلى تنظيم حركة السير وضمان سلامة جميع مستخدمي الطرق.
              يتم فرض غرامات وعقوبات على هذه المخالفات بهدف ردع السلوكيات الخطرة
              وتعزيز الالتزام بقواعد المرور.
            </p>
          </CardContent>
        </Card>

        {/* Types of violations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>أنواع المخالفات المرورية</span>
              <AlertTriangle className="h-5 w-5" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-right">
            <div>
              <h3 className="text-lg font-medium mb-2">مخالفات السرعة</h3>
              <p>
                تشمل تجاوز حدود السرعة المقررة على الطرق المختلفة. تختلف
                الغرامات حسب مقدار تجاوز السرعة المسموح بها.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">مخالفات الوقوف</h3>
              <p>
                تشمل الوقوف في الأماكن الممنوعة، مثل أماكن ذوي الاحتياجات
                الخاصة، أمام مداخل الطوارئ، أو في المناطق المخصصة للحافلات.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                مخالفات الإشارات الضوئية
              </h3>
              <p>
                تشمل تجاوز الإشارة الحمراء أو عدم التوقف عند إشارة قف، وهي من
                المخالفات الخطيرة التي تؤدي إلى حوادث مرورية.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                مخالفات القيادة الخطرة
              </h3>
              <p>
                تشمل القيادة بتهور، التجاوز الخاطئ، عدم ترك مسافة أمان كافية، أو
                استخدام الهاتف أثناء القيادة.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">مخالفات المركبة</h3>
              <p>
                تتعلق بحالة المركبة مثل عدم صلاحية الإطارات، عدم وجود لوحات
                ترخيص، أو عدم صلاحية أضواء المركبة.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Consequences section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>عواقب المخالفات المرورية</span>
              <Ban className="h-5 w-5" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-right">
            <p>تترتب على المخالفات المرورية عدة عواقب، منها:</p>
            <ul className="list-disc list-inside space-y-2 pr-4">
              <li>غرامات مالية تختلف قيمتها حسب نوع وخطورة المخالفة</li>
              <li>
                نقاط سوداء تضاف إلى سجل السائق، وقد تؤدي إلى سحب الرخصة عند
                تجاوز حد معين
              </li>
              <li>حجز المركبة في بعض المخالفات الخطيرة</li>
              <li>سحب رخصة القيادة مؤقتًا أو نهائيًا في حالات معينة</li>
              <li>عقوبات قانونية أخرى قد تصل إلى الحبس في المخالفات الجسيمة</li>
            </ul>
          </CardContent>
        </Card>

        {/* Prevention section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>كيفية تجنب المخالفات المرورية</span>
              <Shield className="h-5 w-5" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-right">
            <p>يمكن تجنب المخالفات المرورية من خلال:</p>
            <ul className="list-disc list-inside space-y-2 pr-4">
              <li>الالتزام بحدود السرعة المقررة على الطرق</li>
              <li>احترام إشارات المرور وعلامات الطريق</li>
              <li>عدم استخدام الهاتف المحمول أثناء القيادة</li>
              <li>الحفاظ على مسافة أمان كافية بين المركبات</li>
              <li>التأكد من سلامة المركبة وصلاحيتها للسير</li>
              <li>الالتزام بقواعد الوقوف وعدم الوقوف في الأماكن الممنوعة</li>
              <li>تجديد رخصة القيادة ووثائق المركبة في المواعيد المحددة</li>
            </ul>
          </CardContent>
        </Card>

        {/* Terms and conditions section */}
        <div className="mt-10">
          <div className="flex items-center mb-4">
            <FileText className="h-5 w-5 ml-2" />
            <h2 className="text-xl font-semibold">الشروط والأحكام</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-right">
                الغرض من المعلومات
              </AccordionTrigger>
              <AccordionContent className="text-right">
                المعلومات المقدمة في هذه الصفحة هي لأغراض توعوية وتثقيفية فقط.
                تهدف إلى تعريف المستخدمين بأنواع المخالفات المرورية وعواقبها
                وكيفية تجنبها. لا تعتبر هذه المعلومات بديلاً عن القوانين
                واللوائح ال��سمية المعمول بها.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-right">
                دقة المعلومات
              </AccordionTrigger>
              <AccordionContent className="text-right">
                نسعى جاهدين لتقديم معلومات دقيقة وحديثة، ولكن قد تتغير القوانين
                واللوائح من وقت لآخر. يجب على المستخدمين الرجوع إلى المصادر
                الرسمية للحصول على أحدث المعلومات المتعلقة بالمخالفات المرورية
                والغرامات المترتبة عليها.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-right">
                المسؤولية القانونية
              </AccordionTrigger>
              <AccordionContent className="text-right">
                لا نتحمل أي مسؤولية قانونية عن أي أضرار أو خسائر قد تنتج عن
                الاعتماد على المعلومات المقدمة في هذه الصفحة. يتحمل المستخدمون
                المسؤولية الكاملة عن التزامهم بقوانين وأنظمة المرور المعمول بها
                في بلدانهم.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-right">
                حقوق الملكية الفكرية
              </AccordionTrigger>
              <AccordionContent className="text-right">
                جميع المحتويات المقدمة في هذه الصفحة محمية بموجب قوانين حقوق
                الملكية الفكرية. لا يجوز نسخ أو إعادة إنتاج أو توزيع أي جزء من
                هذه المحتويات دون الحصول على إذن كتابي مسبق.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-right">
                التعديلات على المحتوى
              </AccordionTrigger>
              <AccordionContent className="text-right">
                نحتفظ بالحق في تعديل أو تحديث أو إزالة أي جزء من محتوى هذه
                الصفحة في أي وقت ودون إشعار مسبق. يتحمل المستخدمون مسؤولية
                مراجعة هذه الشروط والأحكام بشكل دوري للاطلاع على أي تغييرات.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
