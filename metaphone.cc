#include <node_api.h>
#include <string>

extern "C"
{
  #include "./source/metaphone_ptbr.h"
}


static napi_value Metaphone(napi_env env, napi_callback_info info) {
  napi_status status;
  napi_value output;

  std::string locale;
  char *result = NULL;
  size_t str_length = 0;
  wchar_t *str_ch = NULL;
  size_t len = 0;

  size_t argc = 1;

  napi_value args[1];
  status = napi_get_cb_info(env, info, &argc, args, NULL, NULL);
  assert(status == napi_ok);

  if (argc != 1) {
    napi_throw_type_error(env, NULL, "Wrong number of arguments");
    return NULL;
  }

  napi_valuetype valuetype0;
  status = napi_typeof(env, args[0], &valuetype0);
  assert(status == napi_ok);

  if (valuetype0 != napi_string) {
    napi_throw_type_error(env, NULL, "Value must be a string");
    return NULL;
  }

  status = napi_get_value_string_utf8(env, args[0], NULL, 0, &len);
  assert(status == napi_ok);
  char* str = (char*)malloc(len + 1);
  status = napi_get_value_string_utf8(env, args[0], str, len + 1, &len);
  assert(status == napi_ok);

  locale = setlocale(LC_ALL, "");
  str_length = mbstowcs(NULL, str, 0) + 1;
  str_ch = new wchar_t[str_length];
  memset(str_ch, 0, str_length);
  mbstowcs(str_ch, str, str_length);

  result = Metaphone_PTBR(str_ch, str_length);

  delete[] str_ch;
  setlocale(LC_ALL, locale.c_str());

  status = napi_create_string_utf8(env,
                                 result,
                                 NAPI_AUTO_LENGTH,
                                 &output);
  assert(status == napi_ok);

  free(result);
  result = NULL;

  return output;
}

#define DECLARE_NAPI_METHOD(name, func)                                        \
  { name, 0, func, 0, 0, 0, napi_default, 0 }

napi_value Init(napi_env env, napi_value exports) {
  napi_status status;
  napi_property_descriptor metaphoneDescriptor = DECLARE_NAPI_METHOD("metaphone", Metaphone);
  status = napi_define_properties(env, exports, 1, &metaphoneDescriptor);
  assert(status == napi_ok);
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
