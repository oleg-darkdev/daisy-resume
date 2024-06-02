<script>
import PdfViewer from 'svelte-pdf';
  const pathToPdf = "";
</script>

<section class='py-16'>
<!--  pb-6 border-t pt-6 border-[#44149c]-->
	<div class="mb-10  flex flex-shrink-0 flex-col  px-4  mx-auto max-w-4xl">
		<strong
			class="mx-auto flex text-center -mb-20 text-3xl font-thin leading-none text-[#44149c] lg:text-4xl"
		>
			Curriculum Vitae
		</strong>
	</div>


    <div class='max-w-6xl mx-auto rounded-lg'>
      <!-- , "timeInfo" -->
        <PdfViewer  scale='1.8' showButtons='["print", "download"]' showBorder='true' downloadFileName='CV_Oleg_Medvedev' url='./CV_Oleg_Medvedev.pdf' />
    </div>
</section>