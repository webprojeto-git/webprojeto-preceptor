<BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/terms" element={<TermsOfUse />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
